export const deleteUser = async (id, token, decoded) => {
  try {
    const response = await fetch(
      `https://utec-subject.herokuapp.com/api/v1/users/${id}`,
      {
        mode: 'cors',
        method: 'DELETE',
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
    return { message: 'Error to request login', error };
  }
};
