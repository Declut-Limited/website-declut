export type AppStage = "waitlist" | "live";

/**
 * Reads NEXT_PUBLIC_APP_STAGE (inlined at build time, safe in client components).
 * Defaults to "waitlist" for any unset/unrecognized value — that's the current
 * real product stage, and the safer default (won't imply store links exist).
 */
export function getAppStage(): AppStage {
  return process.env.NEXT_PUBLIC_APP_STAGE === "live" ? "live" : "waitlist";
}
