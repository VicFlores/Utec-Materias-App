export const newClassDetail = async (token, decoded, data) => {
  try {
    const response = await fetch(
      'https://utec-materias.onrender.com/api/v1/classdetail',
      {
        mode: 'cors',
        method: 'POST',
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
