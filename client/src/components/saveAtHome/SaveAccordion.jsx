import coinImg from "../../assets/coin.webp"
import GetListItem from "./GetListItem";
import {
    Collapse,
    initTE,
} from "tw-elements";


export default function SaveAccordion() {
    const waterData = [
        "Regularly check faucets, pipes, and toilets for leaks.",
        "Promptly repair any leaks to prevent water wastage.",
        "Replace old faucets and showerheads with low-flow or water-efficient alternatives.",
        "Install a dual-flush toilet to reduce water usage for flushing.",
        "Set up rain barrels to collect rainwater for outdoor use, such as watering plants and gardens.",
        "Instead of using a hose, use a broom to clean driveways and sidewalks.",
        "Only run the dishwasher with a full load.",
        "Scrape dishes instead of pre-rinsing to save water.",
        "Take shorter showers or install a shower timer to limit shower time.",
        "Consider turning off the water while soaping up or shampooing.",
        "A dripping faucet can waste a significant amount of water over time. Fix it promptly.",
        "Insulate hot water pipes to reduce the time it takes for hot water to reach faucets, reducing water wastage.",
        "If you have a swimming pool, cover it when not in use to reduce evaporation.",
        "Water your plants and lawn in the early morning or late evening to minimize water evaporation.",
        "Use a soaker hose or drip irrigation system for efficient watering.",
        "Consider installing a greywater system to reuse water from sinks and showers for flushing toilets or watering plants.",
        "When using appliances like washing machines and dishwashers, make sure they are fully loaded to maximize efficiency.",
        "When washing your car, use a bucket of soapy water and a hose with a shut-off nozzle to reduce water consumption.",
        "Apply mulch to your garden beds to retain moisture and reduce the need for frequent watering.",
        "Ensure that everyone in your household is aware of the importance of water conservation and actively participates.",
        "Keep an eye on your water bills to track your water usage and identify any unexpected spikes.",
        "After boiling or steaming food, let the water cool and use it to water plants or in the garden.",
        "When it's time to replace appliances like washing machines or dishwashers, choose models with high energy and water efficiency ratings.",
        "If you have a swimming pool, cover it when not in use to reduce evaporation.",
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
        "Set your thermostat a few degrees lower in the winter and higher in the summer.",
        "Use a programmable thermostat to optimize heating and cooling schedules.",
        "Seal gaps and cracks in doors, windows, and walls to prevent drafts.",
        "Insulate your home to maintain a consistent indoor temperature.",
        "Hang clothes outside to dry or use a clothesline indoors to reduce dryer usage.",
        "Keep your refrigerator and freezer well-organized to improve air circulation.",
        "Set the temperature of your fridge to the recommended level (usually around 37°F or 3°C).",
        "Disconnect devices with standby power (e.g., gaming consoles) when not in use.",
        "Use power strips to easily turn off multiple devices at once.",
        "Schedule regular maintenance for heating and cooling systems to keep them efficient.",
        "If feasible, invest in solar panels to generate your electricity and reduce reliance on the grid.",
        "Lower the temperature on your water heater to 120°F (49°C).",
        "Use ceiling fans to improve air circulation, allowing you to set the thermostat higher.",
        "Close curtains during the hottest part of the day to block out heat.",
        "Teach your household members about energy-saving practices and encourage their participation.",
        "Install timers and motion sensors for lights and other devices to ensure they are only on when needed.",
        "Keep air filters, vents, and ducts clean to ensure efficient airflow in HVAC systems.",
        "Use energy monitoring tools and smart meters to track your electricity usage and identify areas for improvement.",
    ]

    const foodData = [
        "Plan your meals for the week before grocery shopping to buy only what you need.",
        "Create a shopping list to avoid impulse purchases.",
        "Regularly inspect the expiration dates of items in your pantry and fridge.",
        "Use the \"first in, first out\" method to consume older items first.",
        "Store perishables like fruits, vegetables, and dairy in the refrigerator.",
        "Use airtight containers to keep food fresh and prevent spoilage.",
        "Familiarize yourself with date labels like \"use by,\" \"best by,\" and \"sell by\" to avoid prematurely discarding food.",
        "Serve smaller portions to reduce leftovers.",
        "Save leftovers for future meals or use them creatively in new recipes.",
        "Freeze excess food, such as soups, stews, and casseroles, for later use.",
        "Label items with the date to keep track of freshness.",
        "Learn basic food preservation techniques like canning, pickling, and drying to extend the shelf life of foods.",
        "Turn vegetable scraps into homemade broth.",
        "Use overripe fruit in smoothies, baking, or as toppings for yogurt.",
        "When unpacking groceries, place new items behind older ones to ensure you use items before they expire.",
        "Donate non-perishable items to food banks or shelters.",
        "Participate in community food drives to help those in need.",
        "Keep perishable foods at the correct temperature to prevent spoilage.",
        "Use the crisper drawer for fruits and vegetables.",
        "Regularly check your pantry and fridge to see what needs to be used soon.",
        "Plan meals around items that are close to their expiration dates.",
        "Limit takeout and dining out to prevent food waste from restaurant portions.",
        "Consider sharing meals or ingredients with neighbors or friends to avoid food going to waste.",
        "Set up a compost bin for food scraps that can't be used, turning them into nutrient-rich soil for gardening.",
        "Be cautious when buying in bulk, as large quantities can lead to food waste if not used in time.",
        "Stay informed about food storage, preservation, and expiration guidelines to minimize waste.",
        "Choose brands and products that prioritize sustainability and eco-friendly packaging.",
        "Stale bread can be turned into croutons, breadcrumbs, or used in bread pudding.",
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


    initTE({ Collapse });
    return (
        <div>
            <div className="mx-auto my-10 flex items-center justify-center gap-3">
                <h2 className="text-center text-3xl md:text-5xl">
                    How To Save
                </h2>
                <img src={coinImg} alt="" className="w-11 md:w-14"/>
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
