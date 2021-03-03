export const fetchOrdersData = async (success, fail) => {
  try {
    const res = await fetch('http://localhost:11000/api/orders');
    const data = await res.json();

    success(data)
  } catch (error) {
    fail(error)
  }
}