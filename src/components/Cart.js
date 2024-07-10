import { Container, Table, Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <Container>
      <h1
        style={{ padding: "100px", marginTop: "55px", marginBottom: "-70px" }}
      >
        Welcome To Cart
      </h1>
      <Button
        style={{ backgroundColor: "#9239e5", border: "none" }}
        variant="primary"
        onClick={() => dispatch(clear())}
        className="mb-3"
      >
        Clear All
      </Button>
      <h5>Total Price: {totalPrice.toFixed(2)}$</h5>
      <Table striped bordered hover size="sm" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Img</th>
            <th>Price</th>
            <th>Quantitiy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>
                <Image
                  src={product.image}
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteFromCart(product))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
