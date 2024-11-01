import Hero from '../components/Hero';
import FeatureItem from '../components/FeatureItem';

const Home = () => {
    return (
        <div>
            <Hero />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <FeatureItem
                    imgSrc="./images/icon-chat.webp"
                    imgAlt="Chat Icon"
                    title="You are our #1 priority"
                    description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                />
                <FeatureItem
                    imgSrc="./images/icon-money.webp"
                    imgAlt="Money Icon"
                    title="More savings means higher rates"
                    description="The more you save with us, the higher your interest rate will be!"
                />
                <FeatureItem
                    imgSrc="./images/icon-security.webp"
                    imgAlt="Security Icon"
                    title="Security you can trust"
                    description="We use top of the line encryption to make sure your data and money is always safe."
                />
            </section>
        </div>
    );
}

export default Home;