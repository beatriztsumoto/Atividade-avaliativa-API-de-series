import dados from "../Models/dados.js";
const { series } = dados;

const getAllSeries = (req, res) => {
    res.status(200).json({
        total: series.length,
        series: series
    })
};

const getSeriesById = (req, res) => {
    let id = parseInt(req.params.id);

    const serie = series.find(s => s.id === id);

    if (serie) {
        res.status(200).json({
            success: true,
            serie: serie
        })
    }

    res.status(400).json({
        success: false,
        message: "Serie não encontrada!"
    })
};

const createSerie = (req, res) => {
    const {titulo, genero, canal, temporadas, episodios, anoInicio, anoFim, avaliacao} = req.body;

    if(!titulo || !temporadas){
        return res.status(400).json({
            success: false,
            message: "Título e temporadas são obrigatórios!!"
        });
    }

    const novaSerie = {
        id: series.length + 1,
        titulo,
        genero,
        canal,
        temporadas,
        episodios,
        anoInicio, 
        anoFim, 
        avaliacao
    }

    series.push(novaSerie);

    res.status(201).json({
        success: true,
        message: "Nova serie criada com sucesso!",
        serie: novaSerie
    })
;
};

const deleteSerie =(req, res) => {
    let id = parseInt(req.params.id);

    const serieParaRemover = series.find(s => s.id === id);

    if(!serieParaRemover ) {
        return res.status(404).json({
            success: false,
            message: "Essa serie não existe!"
        });
    }

    const seriesFiltradas = series.filter(serie => serie.id !== id);
    series.splice(0, series.length, ...seriesFiltradas);
    res.status(200).json({
        success: true,
        message: "serie deletada com sucesso!!",
        serieRemovida: serieParaRemover
    });
};




export { getAllSeries, getSeriesById, createSerie };