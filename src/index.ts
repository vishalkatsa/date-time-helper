export function YourDate(value: Date | string, country: string, time?: string) {
    if (value === null) {
        return null;
    } else {
        let newDate: Date;
        if (typeof value === "string") {
            newDate = new Date(value);
        } else {
            newDate = value;
        }

        if (country === "DDMMYYYY") {
            const day = newDate.getDate();
            const month = newDate.getMonth() + 1;
            const year = newDate.getFullYear();
            let fullDate = `${day}/${month}/${year}`;
            if (time) {
                const hours = newDate.getHours();
                const minutes = newDate.getMinutes();
                const seconds = newDate.getSeconds();
                if (time === "12") {
                    const amPM = hours >= 12 ? 'PM' : 'AM';
                    const formattedHours = hours % 12 || 12;
                    fullDate += ` ${formattedHours}:${minutes}:${seconds} ${amPM}`;
                } else if (time === "24") {
                    const amPM = hours >= 12 ? 'PM' : 'AM';
                    fullDate += ` ${hours}:${minutes}:${seconds} ${amPM}`;
                }
            }
            return fullDate;
        } else if (country === "YYYYMMDD") {
            const day = newDate.getDate();
            const month = newDate.getMonth() + 1;
            const year = newDate.getFullYear();
            let fullDate = `${year}/${month}/${day}`;
            if (time) {
                const hours = newDate.getHours();
                const minutes = newDate.getMinutes();
                const seconds = newDate.getSeconds();
                fullDate += ` ${hours}:${minutes}:${seconds}`;
            }
            return fullDate;
        } else if (country === "MMDDYYYY") {
            const day = newDate.getDate();
            const month = newDate.getMonth() + 1;
            const year = newDate.getFullYear();
            let fullDate = `${month}/${day}/${year}`;
            if (time) {
                const hours = newDate.getHours();
                const minutes = newDate.getMinutes();
                const seconds = newDate.getSeconds();
                if (time === "12") {
                    const amPM = hours >= 12 ? 'PM' : 'AM';
                    const formattedHours = hours % 12 || 12;
                    fullDate += ` ${formattedHours}:${minutes}:${seconds} ${amPM}`;
                } else if (time === "24") {
                    const amPM = hours >= 12 ? 'PM' : 'AM';
                    fullDate += ` ${hours}:${minutes}:${seconds} ${amPM}`;
                }
            }
            return fullDate;
        } else {
            return "unsupported Date Format";
        }
    }
}
