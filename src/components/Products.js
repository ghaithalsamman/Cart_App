import {Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {useDispatch} from "react-redux";
import {addToCart} from "../rtk/cartSlice";

import {useGetProductsQuery} from "../rtk/productsAPI";
import ProductsSkeleton from "../skeleton/ProductsSkeleton";

export default function Products() {
	const dispatch = useDispatch();
	const {data: products, isError, isLoading} = useGetProductsQuery();

	return (
		<Container style={{paddingTop: "60px"}}>
			<Row style={{display: "flex", flexWrap: "wrap"}}>
				{isLoading ? (
					<Col>
						<ProductsSkeleton />
						<ProductsSkeleton />
						<ProductsSkeleton />
						<ProductsSkeleton />
					</Col>
				) : (
					products?.map((product) => (
						<Col key={product.id}>
							<Card
								style={{
									width: "18rem",
									height: "500px",
									backgroundColor: "rgb(233 229 229)",
									margin: "auto",
								}}
							>
								<Card.Img
									style={{
										height: "300px",
										width: "90%",
										margin: "auto",
										paddingTop: "10px",
									}}
									variant='top'
									src={product.image}
								/>
								<Card.Body>
									<Card.Title>{product.title}</Card.Title>
									<Card.Text style={{padding: "10px"}}>Price : {product.price}$</Card.Text>
									<Button
										style={{
											position: "absolute",
											bottom: "5px",
											right: "85px",
											backgroundColor: "#9239e5",
											border: "none",
										}}
										variant='primary'
										onClick={() => {
											dispatch(addToCart(product));
										}}
									>
										Add To Card
									</Button>
								</Card.Body>
							</Card>
						</Col>
					))
				)}
			</Row>
		</Container>
	);
}
