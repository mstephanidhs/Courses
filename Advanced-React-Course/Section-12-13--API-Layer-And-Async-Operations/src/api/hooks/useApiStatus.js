import { useMemo, useState } from "react";
import { defaultApiStatuses } from "../../constants/api-status";

// "ERROR" => "Error" => isError
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

const prepareStatuses = (currentStatus) => {
    const statuses = {};

    for (const status of defaultApiStatuses) {
        const normalizedStatus = capitalize(status.toLowerCase());
        const normalizedStatusKey = `is${normalizedStatus}`;
        statuses[normalizedStatusKey] = currentStatus === status
    }
    return statuses;
}

export const useApiStatus = (currentStatus = IDLE) => {
    const [status, setStatus] = useState(currentStatus);
    const statuses = useMemo(() => prepareStatuses(status), [status])

    return {
        status,
        setStatus,
        ...statuses
    }
}