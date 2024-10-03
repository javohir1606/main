export const banners = async () => {
  try {
    const res = fetch('http://localhost:3600/banners');
    const data = (await res).json();
    return data;
  } catch (error) {
    return error.massage
  }
}


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

export const catalogBrand = async (brand) => {
  try {
    const res = await fetch(`http://localhost:3600/${brand}`);
    const data = await res.json();

    return data;
  } catch (error) {
    return error.massage;
  }
}

