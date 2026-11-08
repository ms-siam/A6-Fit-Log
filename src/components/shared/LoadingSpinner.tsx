const LoadingSpinner = ({ label }: { label?: string }) => {
    return (
        <div className="flex flex-col items-center gap-3 py-16">
            <span className="loading loading-spinner loading-lg text-[#C4F000]"></span>
            {label && <p className="text-gray-400">{label}</p>}
        </div>
    );
};

export default LoadingSpinner;