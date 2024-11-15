// import { useTranslation } from "react-i18next";
import Entertaiment from "../components/Entertaiment";
import Health from "../components/Health";
import HotNew from "../components/HotNew";
import LatestNew from "../components/LatestNew";
import { Politics } from "../components/Politics";
import Sports from "../components/Sports";
import Technology from "../components/Technology";
import Travel from "../components/Travel";

const Home = () => {
    return (
        <div className="w-full lg:px-24 lg:py-10">
            <HotNew />
            <LatestNew />
            <Entertaiment />
            <Politics />
            <Sports />
            <Health />
            <Technology />
            <Travel />
        </div>
    );
};

export default Home;
