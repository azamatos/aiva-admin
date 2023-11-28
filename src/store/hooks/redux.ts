import { AppDispatch, RootState } from "..";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };
