
import Image from "next/image";
import ParticlesContainer from "../Components/ParticlesContainer";
import ProjectsBtn from "../Components/ProjectsBtn";
import Avatar from "../Components/Avatar";

import { motion } from "framer-motion";

import { fadeIn } from '../variants';


const Home = () => {
    return (
        <div className="bg-primary/60 h-full">
            <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
                <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
                <h1 className="h1">Transforming Ideas <br/> Into <span className="text-accent">Digital Reality</span> </h1>
                <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias sapiente culpa, magni ipsam ullam sunt quis cum impedit est incidunt!
                </p>
                </div>
                </div>
            <div>Image</div>
        </div>
    );
}

export default Home;