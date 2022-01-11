export const editTimeStamp = async (id, token, decoded, data) => {
  try {
    const response = await fetch(
      `https://utec-subject.herokuapp.com/api/v1/timestamp/${id}`,
      {
        mode: 'cors',
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          token,
          role: `${decoded.roles}`,
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    return { message: 'Error to request login', error };
  }
};
