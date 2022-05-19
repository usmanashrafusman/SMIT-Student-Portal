export const getCourses = () => {
  return {
    url: `course/getCourses`,
    method: "GET",
  };
};

export const applyCourse = (id, token) => {
  return {
    url: `course//applyCourse/${id}`,
    method: "POST",
    headers: {
      token: token,
    },
  };
};
