export const applyLeave = (token) => {
  return {
    url: "leaves//addLeave",
    method: "POST",
    headers: {
      token: token,
    },
  };
};

export const getMyLeaves = (token) => {
  return {
    url: "leaves//getMyLeaves",
    method: "GET",
    headers: {
      token: token,
    },
  };
};
