import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStatusActions } from "../store/fetchStatus";
import { itemsActions } from "../store/itemSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(({ items }) => {
        console.log(items[0])
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingEnded());
        dispatch(itemsActions.addInitialItems(items[0])); // Fixed typo here
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
          dispatch(fetchStatusActions.markFetchingEnded());
        }
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus, dispatch]);

  return <></>;
};

export default FetchItems;
