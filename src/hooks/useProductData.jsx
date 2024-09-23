import useDataFetch from "./useDataFetch";

const useProductData = () => {
    const { data, loading, error } = useDataFetch("/products.json")
    return { data, loading, error }
};

export default useProductData;