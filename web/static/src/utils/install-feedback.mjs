const knownAccountStatuses = new Set(["valid", "invalid"]);

export function accountStatusLabel(status, translate) {
  const value = String(status ?? "").trim();
  const key = value.toLowerCase();
  if (knownAccountStatuses.has(key)) {
    return translate(`account.status_labels.${key}`);
  }
  return value || "—";
}

export function installFailureMessage(output, translate) {
  const log = String(output ?? "");
  if (
    log.includes("An Application Group with Identifier") &&
    log.includes("is not available")
  ) {
    return translate("install.toast.app_group_unavailable");
  }
  return translate("install.toast.install_failed");
}
