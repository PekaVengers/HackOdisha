import coinImg from "../../assets/coin.webp"
import { useEffect } from "react";
import GetListItem from "./GetListItem";
import {
    Collapse,
    initTE,
} from "tw-elements";


export default function SaveAccordion() {
    useEffect(() => {
        initTE({ Collapse });
      }, []);
    const waterData = [
        "Regularly check faucets, pipes, and toilets for leaks.",
        "Promptly repair any leaks to prevent water wastage.",
        "Install a dual-flush toilet to reduce water usage for flushing.",
        "Instead of using a hose, use a broom to clean driveways and sidewalks.",
        "Only run the dishwasher with a full load.",
        "Scrape dishes instead of pre-rinsing to save water.",
        "Take shorter showers or install a shower timer to limit shower time.",
        "Stay informed about local water conservation regulations and incentives to make informed decisions.",
    ]

    const elecData = [
        "Replace incandescent bulbs with energy-efficient LED or CFL bulbs.",
        "Use task lighting to illuminate specific areas instead of lighting entire rooms.",
        "Unplug chargers, appliances, and electronics when not in use.",
        "Use smart power strips to automatically cut power to devices when they are turned off.",
        "Open curtains and blinds during the day to make the most of natural light.",
        "Close them at night to keep heat in during colder months.",
        "Invest in energy-efficient appliances with ENERGY STAR ratings.",
        "Maintain appliances regularly to ensure they operate efficiently.",
        "Use energy monitoring tools and smart meters to track your electricity usage and identify areas for improvement.",
    ]

    const foodData = [
        "Plan your meals for the week before grocery shopping to buy only what you need.",
        "Create a shopping list to avoid impulse purchases.",
        "Regularly inspect the expiration dates of items in your pantry and fridge.",
        "Use the \"first in, first out\" method to consume older items first.",
        "Store perishables like fruits, vegetables, and dairy in the refrigerator.",
        "Use airtight containers to keep food fresh and prevent spoilage.",
        "Serve smaller portions to reduce leftovers.",
        "Save leftovers for future meals or use them creatively in new recipes.",
        "Freeze excess food, such as soups, stews, and casseroles, for later use.",
        "Label items with the date to keep track of freshness.",
        "Choose brands and products that prioritize sustainability and eco-friendly packaging.",
        "Serve smaller portions initially, and offer seconds if needed to avoid plate waste.",
    ]

    const processedWaterData = waterData.map((item, index) => {
        const processedLi = <GetListItem content={item} key={index} />;
        return processedLi;
    });

    const processedElecData = elecData.map((item, index) => {
        const processedLi = <GetListItem content={item} key={index} />;
        return processedLi;
    })

    const processedFoodData = foodData.map((item, index) => {
        const processedLi = <GetListItem content={item} key={index} />;
        return processedLi;
    })


    return (
        <div>
            <div className="mx-auto my-10 flex items-center justify-center gap-3">
                <h2 className="text-center text-3xl md:text-5xl">
                    How To Save
                </h2>
                <img src={coinImg} alt="" className="w-11 md:w-14" />
            </div>
            <div id="accordionFlushExample" className="max-w-5xl mx-auto">
                <div
                    className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white">
                    <h2 className="mb-0" id="flush-headingOne">
                        <button
                            className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-2xl font-semibold text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                            type="button"
                            data-te-collapse-init
                            data-te-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne">
                            Water
                            <span
                                className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className="!visible border-0"
                        data-te-collapse-item
                        data-te-collapse-show
                        aria-labelledby="flush-headingOne"
                        data-te-parent="#accordionFlushExample">
                        <div className="px-5 py-4 pl-0 ml-9">
                            <ul>
                                {processedWaterData}
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white">
                    <h2 className="mb-0" id="flush-headingTwo">
                        <button
                            className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left  text-2xl font-semibold text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                            type="button"
                            data-te-collapse-init
                            data-te-collapse-collapsed
                            data-te-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo">
                            Electricity
                            <span
                                className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwo"
                        className="!visible hidden border-0"
                        data-te-collapse-item
                        aria-labelledby="flush-headingTwo"
                        data-te-parent="#accordionFlushExample">
                        <div className="md:px-5 py-4">
                            {processedElecData}
                        </div>
                    </div>
                </div>
                <div
                    className="rounded-none border border-b-0 border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white pb-12">
                    <h2 className="mb-0" id="flush-headingThree">
                        <button
                            className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-2xl font-semibold text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                            type="button"
                            data-te-collapse-init
                            data-te-collapse-collapsed
                            data-te-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree">
                            Energy
                            <span
                                className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <div
                        id="flush-collapseThree"
                        className="!visible hidden"
                        data-te-collapse-item
                        aria-labelledby="flush-headingThree"
                        data-te-parent="#accordionFlushExample">
                        <div className="px-5 py-4">
                            {processedFoodData}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
