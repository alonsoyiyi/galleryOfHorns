import HornedBeast from './HornedBeast';
import hornedBeast from './hornetBeast.json';

function Gallery() {
    return (
        <>
            <HornedBeast title="ciervo" description="animal con abundantes cuernos macho " imageUrl="https://plus.unsplash.com/premium_photo-1674045998137-5149eac0d969?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <HornedBeast title="toro" description="animal de dos cuernos macho" imageUrl="https://images.unsplash.com/photo-1535435734705-4f0f32e27c83?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            {hornedBeast.map(data => (
                <HornedBeast  title={data.title} description={data.description} imageUrl={data.image_url} />
            ))
            }
        </>
    );
}

export default Gallery;