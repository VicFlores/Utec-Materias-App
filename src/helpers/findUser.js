export const findUser = async (decoded, token) => {
  try {
    const response = await fetch(
      `https://utec-subject.herokuapp.com/api/v1/users/specific/${decoded.sub}`,
      {
        mode: 'cors',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          token,
          role: `${decoded.roles}`,
        },
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    return { message: 'Error to request users', error };
  }
};
