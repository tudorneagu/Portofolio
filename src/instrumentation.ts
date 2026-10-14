import { SeverityNumber, logs } from "@opentelemetry/api-logs";
import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";
import { resourceFromAttributes } from "@opentelemetry/resources";
import {
	BatchLogRecordProcessor,
	LoggerProvider,
} from "@opentelemetry/sdk-logs";

const posthogToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;
const posthogLogConfiguration =
	posthogToken && posthogHost
		? { host: posthogHost, token: posthogToken }
		: null;
const hasPostHogLogConfiguration = Boolean(posthogLogConfiguration);

export const loggerProvider = posthogLogConfiguration
	? new LoggerProvider({
			resource: resourceFromAttributes({
				"service.name": "portofolio-chat",
				"deployment.environment": process.env.NODE_ENV ?? "production",
			}),
			processors: [
				new BatchLogRecordProcessor({
					exporter: new OTLPLogExporter({
						url: new URL("/i/v1/logs", posthogLogConfiguration.host).toString(),
						headers: {
							Authorization: `Bearer ${posthogLogConfiguration.token}`,
							"Content-Type": "application/json",
						},
					}),
				}),
			],
		})
	: null;

const posthogLogger = loggerProvider?.getLogger("posthog-portfolio-logs");

type LogAttributes = Record<string, boolean | number | string>;

export function emitPostHogLog(
	severityNumber: SeverityNumber,
	body: string,
	attributes: LogAttributes,
) {
	posthogLogger?.emit({ severityNumber, body, attributes });
}

export async function flushPostHogLogs() {
	await loggerProvider?.forceFlush();
}

export function register() {
	if (process.env.NEXT_RUNTIME !== "nodejs") return;

	if (!hasPostHogLogConfiguration) {
		if (process.env.NODE_ENV === "development") {
			const missing = posthogToken
				? "NEXT_PUBLIC_POSTHOG_HOST"
				: "NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN";
			throw new Error(
				`${missing} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missing} is configured`,
			);
		}
		return;
	}

	if (!loggerProvider) return;
	logs.setGlobalLoggerProvider(loggerProvider);
}
