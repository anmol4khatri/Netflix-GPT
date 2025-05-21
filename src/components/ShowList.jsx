import ShowCard from "./ShowCard";

const ShowList = ({title, shows}) => {

    return (
        <div className="">
            <h1 className="text-3xl pt-10 pb-3 font-bold text-white">{title}</h1>
            <div className="flex gap-5 flex-nowrap overflow-x-auto">
                {shows.map((show) => (
                <ShowCard key={show.id} poster={show.poster_path} />
                ))}
            </div>
        </div>
    );
};

export default ShowList;