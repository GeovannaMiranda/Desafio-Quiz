import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual bicho transmite a Doença de Chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro'),
    ]),
    new QuestaoModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora'),
    ]),
    new QuestaoModel(203, 'Qual é o coletivo de cães?', [
        RespostaModel.errada('Manada'),
        RespostaModel.errada('Alcateia'),
        RespostaModel.errada('Rebanho'),
        RespostaModel.certa('Matilha'),
    ]),
    new QuestaoModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        RespostaModel.errada('Equilátero'),
        RespostaModel.errada('Isóceles'),
        RespostaModel.errada('Trapézio'),
        RespostaModel.certa('Escaleno'),
    ]),
    new QuestaoModel(205, 'Quem compôs o hino da independência?', [
        RespostaModel.errada('Manuel Bandeira'),
        RespostaModel.errada('Castro Alves'),
        RespostaModel.errada('Carlos Gomes'),
        RespostaModel.certa('Dom Pedro I'),

    ]),
    new QuestaoModel(206, 'Qual é o antônimo de "malograr"?', [
        RespostaModel.errada('Perder'),
        RespostaModel.errada('Fracassar'),
        RespostaModel.errada('Desprezar'),
        RespostaModel.certa('Conseguir'),
    ]),
    new QuestaoModel(207, 'Em que país nasceu Carmem Miranda?', [
        RespostaModel.errada('Brasil'),
        RespostaModel.errada('Espanha'),
        RespostaModel.errada('Argentina'),
        RespostaModel.certa('Portugal'),
    ]),
    new QuestaoModel(208, 'Qual foi o último presidente no período da ditadura militar no Brasil?', [
        RespostaModel.errada('Emílio Maciel'),
        RespostaModel.errada('Ernesto Geisel'),
        RespostaModel.errada('Costa e Silva'),
        RespostaModel.certa('João Figuereido'),
    ]),
    new QuestaoModel(209, 'Seguindo a sequência do baralho qual carta vem depois do dez?', [
        RespostaModel.errada('Rei'),
        RespostaModel.errada('Nove'),
        RespostaModel.errada('Às'),
        RespostaModel.certa('Valete'),
    ]),
    new QuestaoModel(210, 'O adjetivo "venoso" está relacionado a?', [
        RespostaModel.errada('Vela'),
        RespostaModel.errada('Vento'),
        RespostaModel.errada('Vênia'),
        RespostaModel.certa('Veia'),
    ]),

]
export default questoes;