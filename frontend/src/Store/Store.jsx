import React, { useCallback, useReducer } from "react";
import { createContext } from "react";
export const appContext = createContext();
const reducer = (currentvalue, action) => {
  if (action.type === "add") {
    const newCardObj = [
      ...currentvalue,
      {
        id: Date.now(),
        title: action.payload.title,
        body: action.payload.body,
        tags: action.payload.tags,
      },
    ];
    return newCardObj;
  } else if (action.type === "delete") {
    const newCardObj = currentvalue.filter((element) => {
      return element.id != action.payload.deleteItem;
    });
    return newCardObj;
  } else if (action.type === "get_server") {
    const newCardObj = action.payload;
    return newCardObj;
  }
};
const Store = ({ children }) => {
  const [cardObj, cardDispatch] = useReducer(reducer, []);
  const handleAddPost = (title, body, tags) => {
    const newAddObject = {
      type: "add",
      payload: {
        title,
        body,
        tags,
      },
    };
    cardDispatch(newAddObject);
  };
  const getServerData = (serverData) => {
    const newAddObject = {
      type: "get_server",
      payload: serverData,
    };
    cardDispatch(newAddObject);
  };
  const handleDeletePost = useCallback(
    (deleteItem) => {
      const newDeleteObject = {
        type: "delete",
        payload: {
          deleteItem,
        },
      };
      cardDispatch(newDeleteObject);
    },
    [cardDispatch]
  );

  return (
    <appContext.Provider
      value={{
        cardObj,
        handleAddPost,
        handleDeletePost,
        getServerData,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default Store;
