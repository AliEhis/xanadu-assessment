export const currency = value => {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const capitalize = string => {
    return string.toUpperCase();
}

export const titleCase = string => {
    return string.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

export const convertDateTimeToDay = (date) => {
    if (!date) return date
    let dateTime = new Date(date.substring(0, 10));
    return dateTime.toLocaleString('en-US', {
        weekday: 'short'
    });
}

export const convertDateTimeToTime = (date) => {
    if (!date) return date
    let dateTime = new Date(date);
    return dateTime.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    });
}

export const convertDateTimetoHuman = (date) => {
    let dateTime = new Date(date);
    let dateHuman = dateTime.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    });
    return dateHuman;
}

export const generateURLQuery = obj => {
    return new URLSearchParams(obj).toString()
      ? "?" + new URLSearchParams(obj).toString()
      : "";
}

export const convertToUnixTime = (date, time) => {
    const dateTime = new Date(date + " " + time);
    const timestampInMs  = dateTime.getTime();
    return Math.floor(timestampInMs / 1000);
}