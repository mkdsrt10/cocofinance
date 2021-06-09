const ARCHIVED_FARMS_START_PID = 139
const ARCHIVED_FARMS_END_PID = 250

const isArchivedPid = (pid) => pid >= ARCHIVED_FARMS_START_PID && pid <= ARCHIVED_FARMS_END_PID

module.exports = isArchivedPid
