-- phpMyAdmin SQL Dump
-- version 4.6.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 28-05-2016 a las 17:44:11
-- Versión del servidor: 5.7.12-log
-- Versión de PHP: 7.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lolk`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `champs`
--

CREATE TABLE `champs` (
  `Ch_Id` int(11) NOT NULL,
  `Ch_Nombre` varchar(30) NOT NULL,
  `Ch_Alias` varchar(50) NOT NULL,
  `Ch_Alineacion` varchar(30) NOT NULL,
  `Ch_Historia` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `champs`
--

INSERT INTO `champs` (`Ch_Id`, `Ch_Nombre`, `Ch_Alias`, `Ch_Alineacion`, `Ch_Historia`) VALUES
(1, 'Tristana', 'la Artillera Yordle', 'La ciudad de los enanos', 'La grandeza viene a veces en frascos pequeños, como demuestra esta diminuta artillera yordle. En medio de un mundo hostil, Tristana no da la espalda a reto alguno y ha conseguido convertirse en un arquetipo de habilidad marcial, valor a toda prueba y desbordante optimismo. Para Trist y su fiel cañón, Boomer, cada misión es una oportunidad de demostrar que los héroes existen.'),
(2, 'Shyvanna', 'la Hija del Dragón', 'Demacia', 'Una mestiza nacida de la unión entre un dragón y un humano, Shyvana ha buscado su lugar durante toda la vida. La persecución la ha convertido en una guerrera brutal, y aquellos que osan hacer frente a Shyvana se enfrentan a la feroz bestia que acecha bajo su piel.\n\nLos dragones consideraron la sangre impura de Shyvana una abominación, y se pasó toda su infancia siendo perseguida sin descanso por un malvado dragón. Siempre huyendo, ella y su padre, un dragón marginado, nunca conocieron un hogar de verdad. Con el reflejo de brutales e incontables batallas, Shyvana creció entre odio y violencia. Después de años de lucha, su padre pereció ante el otro dragón, no sin antes herir gravemente al enemigo. Furiosa por la pena, Shyvana persiguió al asesino de su padre que voló al norte para recuperarse. Allí, ella se encontró con un grupo de humanos que buscaban al mismo dragón. A pesar de que los hombres la observaban con miedo, el líder se acercó a Shyvana tranquilamente. Se presentó como Jarvan IV, príncipe de Demacia, y le ofreció ayuda a Shyvana para su venganza. Juntos cazaron y se enfrentaron al cruel dragón que había asesinado a su padre. Shyvana no esperaba que los hombres sobrevivieran, sin embargo, en el fragor de la batalla, Jarvan y sus hombres pelearon con una fuerza que ella misma nunca hubiera creído que tuvieran los humanos. Los acorazados guerreros consiguieron someter al enemigo, y fue Shyvana la que le dio el golpe de gracia, arrancándole el corazón a la bestia. Inspirado por su ferocidad, Jarvan le ofreció un puesto en su guarda de élite. Shyvana aún podía ver el terror en los ojos de los hombres, pero añoraba un verdadero hogar. Confió en la palabra de Jarvan y aceptó la oferta, sirviendo así como una guerrera demaciana. Aunque los aliados humanos admiran su poder, mantienen la distancia. Shyvana lucha con el poder del dragón de su interior para pagar la amabilidad del príncipe, pero no evita preguntarse si los humanos hacen bien en temerla.\n\n\'\'He demostrado mi poder a los dragones, ¿qué desafío plantean los humanos?\'\'\n-- Shyvana'),
(4, '', '', '', ''),
(5, 'Janna', 'la Furia de la Tormenta', 'Independiente, (demacia)', 'Hay hechiceros que se entregan a los poderes primordiales de la naturaleza, renunciando a todo cuando hayan aprendido de la magia. Janna es una de esas hechiceras, que aprendió magia como huérfana cuando crecía en medio del caos de la ciudad estado de Zaun. Janna sobrevivía como podía en las calles. La vida era dura y peligrosa para una chica joven y bella, así que sobrevivía a base de ingenio y de robar cuando el ingenio no era suficiente. La magia desbocada que caracteriza a Zaun fue la primera herramienta, y la más atrayente, con la que Janna supo que podría protegerse y sobresalir. Janna descubrió que tenía afinidad con un tipo concreto de magia: la elemental del aire. Dominó sus estudios sobre la magia del aire en cuestión de meses, casi como si hubiera nacido para ello. Janna pasó de vagabunda callejera a avatar del aire prácticamente de la noche a la mañana, asombrando y superando a aquellos que la habían educado. Esa ascensión tan veloz también cambió su aspecto físico, dotándola de una apariencia de otro mundo.\n\nCon el objetivo de acabar con la injusticia del mundo (en especial, la locura en que se convirtió la ciudad de Zaun), Janna llevó su talento a la Liga de Leyendas. Es una voz por la regulación de la experimentación mágica y apoya el desarrollo de la tecmaturgia. De este modo, se convierte en una aliada indirecta de la ciudad estado de Piltóver y de las brillantes mentes tecmatúrgicas que viven allí. Janna también es una nueva favorita de muchos aficionados de la Liga. A menudo es el centro de atención en funciones, días de aficionados y otros eventos conmemorativos. Sin embargo, hay algo intocable en Janna y sus sentimientos pueden cambiar tan rápidamente como el viento.\n\nNo te dejes hechizar por la belleza de Janna. Como el viento, le basta un soplo para provocar una tremenda destrucción.'),
(6, 'Tryndamere', 'el Rey Bárbaro', 'Fréljord', 'Tryndamere avanza por la tundra empujado por su furia y rabia desatadas, domina el arte de la batalla y desafía a los más poderosos guerreros del Fréljord. Este bárbaro iracundo busca vengarse de quien diezmó a su clan, y acaba con todo aquel que se interponga entre él y su retribución final.\r\n\r\nEl joven Tryndamere intentaba sobrevivir en el duro y helador Fréljord, y su gente combatía contra otras tribus por los escasos recursos que daba la tierra. En una de estas peleas, su vida cambió para siempre. Los incursores tendieron una emboscada a Tryndamere en el silencio de la noche, y aunque los guerreros pudieron repeler la primera oleada, no estaban listos para la figura oscura que apareció después. Blandía una espada cruel y viviente, e inspiraba ansias de sangre en los invasores con su magia de otro mundo. La tribu de Tryndamere fue superada en un momento. Después de perder la esperanza de derrotar a ese ser enigmático, Tryndamere se lanzó a una muerte segura. La figura oscura lo apartó a un lado e hirió mortalmente al joven bárbaro.\r\n\r\nTryndamere veía cómo la muerte y la destrucción se cebaban con su hogar al tiempo que veía cómo la vida se le escapaba de las manos. Nadie aguantó, sólo quedaban los gritos de los moribundos. Tryndamere era incapaz de rendirse y se entregó del todo a su ira. Su sangre hervía y la rabia lo consumía, lo que disipaba su mortalidad. Se puso de pie, casi incapaz de sostener la espada, preparándose para el enfrentamiento final con ese ser sombrío. Pero la figura oscura ni siquiera alzó la espada, en vez de eso, sonrió familiarmente a Tryndamere mientras se desvanecía en las sombras. Fue la última vez que el bárbaro vio a su némesis.\r\n\r\nTryndamere, un hombre al que habían arrebatado su hogar y a su gente, merodeó por el Fréljord durante años, y juró convertirse en un instrumento de venganza brutal. Visitó todas las tribus de los páramos helados, y superó a todos sus campeones, hasta que no quedó ninguno al que desafiar. Durante este tiempo, dominó las artes bárbaras y convirtió su rabia en una fuerza a tener en cuenta. Espada en mano e ira en el corazón, está inmerso en una misión de venganza contra aquellos que destrozaron la vida que una vez conoció. \r\n\r\n\'\'La ira es mi arma\'\'.\r\n-- Tryndamere');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `champs`
--
ALTER TABLE `champs`
  ADD PRIMARY KEY (`Ch_Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `champs`
--
ALTER TABLE `champs`
  MODIFY `Ch_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
