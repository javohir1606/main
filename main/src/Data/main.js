export const catalog = async () => {
  try {
    const res = await fetch('http://localhost:3600/catalog');
    const data = await res.json();
    return data;
  } catch (error) {
    return error.massage;
  }
}


export const catalogData = async (name) => {
  try {
    const res = await fetch(`http://localhost:3600/${name}`);
    const data = await res.json();

    return data;
  } catch (error) {
    return error.massage;
  }
}