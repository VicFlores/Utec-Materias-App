export const loginUser = async (data) => {
  try {
    const response = await fetch(
      'https://utec-materias.onrender.com/api/v1/login',
      {
        mode: 'cors',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();
    return result;
  } catch (error) {
    return { message: 'Error to request login', error };
  }
};
