export const createLogger = (name) => {
  const logs = [];
  return {
    log(message) {
      logs.push(`log - ${name} - ${message}`);
    },
    error(errorType) {
      logs.push(`error - ${name} - ${errorType}`);
    },
    getLogs() {
      return logs;
    },
  };
};
