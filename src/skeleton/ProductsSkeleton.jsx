import ContentLoader from "react-content-loader";

const ProductsSkeleton = (props) => (
	<ContentLoader speed={2} width={320} height={440} viewBox='0 0 320 440' backgroundColor='#ebebeb' foregroundColor='#ecebeb' {...props}>
		<rect x='5' y='7' rx='29' ry='29' width='316' height='360' />
		<rect x='46' y='380' rx='15' ry='15' width='228' height='21' />
		<rect x='95' y='411' rx='13' ry='13' width='126' height='21' />
	</ContentLoader>
);

export default ProductsSkeleton;
