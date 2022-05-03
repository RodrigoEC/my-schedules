import React, { createContext, useContext, useState, useEffect } from "react";
import { getDatabaseSchema, getListDatabase } from "../services/notion";

const ContentContext = createContext();

export default function ContentProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [loadingSchema, setLoadingSchema] = useState(false);
  const [failed, setFailed] = useState(false);
  const [listElementsRaw, setListElementsRaw] = useState([]);
  const [listElements, setListElements] = useState({});
  const [activeModal, setActiveModal] = useState(false);
  const [schema, setSchema] = useState({
    'Categoria': {
      multi_select: {
        options: []
      }
    },
  });
  const [currentModalElement, setCurrentModalElement] = useState();

  const formatElementsList = (listData) => {
    const listObject = {};

    listData.forEach((data) => {
      if (
        data.properties["Dia semana"].select &&
        listObject[data.properties["Dia semana"].select.name]
      ) {
        listObject[data.properties["Dia semana"].select.name].push(data);
      } else if (data.properties["Dia semana"].select) {
        listObject[data.properties["Dia semana"].select.name] = [data];
      }
    });

    setListElementsRaw(listData);
    setListElements(listObject);
  };

  const handleModalElement = (element) => {
    setCurrentModalElement(element ? element : null);
    element && setActiveModal(true);
  };

  const getListData = async () => {
    setLoadingSchema(true);

    const schema = await getDatabaseSchema();

    if (!schema) {
      setFailed(true);
    } else {
      setLoadingSchema(schema.properties);
      setFailed(false);
    }
    setLoading(false);
  };

  const getSchemaData = async () => {
    setLoading(true);

    const listData = await getListDatabase();

    if (!listData) {
      setFailed(true);
    } else {
      formatElementsList(listData.results);
      setFailed(false);
    }
    setLoading(false);
  };

  const value = {
    loading,
    setLoading,
    failed,
    setFailed,
    listElementsRaw,
    setListElementsRaw,
    listElements,
    setListElements,
    formatElementsList,
    getListData,
    activeModal,
    setActiveModal,
    schema,
    setSchema,
    currentModalElement,
    setCurrentModalElement,
    handleModalElement,
    getSchemaData,
    loadingSchema,
  };

  useEffect(() => {
    const getSchema = async () => {
      const schema = await getDatabaseSchema();
      setSchema(schema.properties);
    };

    getSchema();
    getListData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);

  return { ...context };
}
