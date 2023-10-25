export function getTokenIncludedConfig() {
  return {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access")}`,
    },
  };
}

export function getToken() {
  return {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access")}`,
      _id: `${localStorage.getItem("id")}`
    },
  };
}
