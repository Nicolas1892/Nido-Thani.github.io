import React, { useEffect, useState } from "react";
import { getFeriadosData } from "../helpers/axios";

export const Feriados = () => {
    const [feriados, setFeriados] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);

    const axiosFeriados = async () => {
        try {
            setLoading(true);
            feriados = await getFeriadosData();
            setFeriados(feriados);
            setLoading(false);
        } catch (error) { }
    };

    useEffect(() => {
        axiosFeriados();
    }, [page]);

    return (
        <div>

        </div>

    );
};