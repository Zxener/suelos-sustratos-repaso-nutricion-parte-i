const topics=[
['¿Qué es un nutriente vegetal?','Elemento, ion y fertilizante','Un nutriente es un elemento químico que participa en la estructura o el funcionamiento de la planta.',[
['Tres conceptos diferentes','Elemento: el nutriente como elemento químico, por ejemplo nitrógeno (N).|Ion: una forma química con carga; NO₃⁻ y NH₄⁺ son formas de N absorbibles por la planta.|Fertilizante: producto que aporta nutrientes.'],
['Cómo llegan a la planta','Las raíces absorben principalmente iones disueltos.|El carbono proviene principalmente del CO₂ atmosférico.'],
['Funciones complementarias','Agua: disuelve, transporta y participa en procesos vitales.|Luz: aporta energía para la fotosíntesis.|Nutrientes: aportan elementos esenciales para crecimiento, desarrollo y funcionamiento.'],
['El papel del sustrato','Regula agua, aire y nutrientes: retiene y libera agua, aporta espacios con oxígeno y almacena o pone nutrientes a disposición.']]],
['Nutrientes esenciales','Tres criterios clásicos','Sin un elemento esencial, la planta no puede completar su ciclo de vida.',[
['Criterios de esencialidad','Sin el elemento, la planta no completa su ciclo de vida.|Su función no puede ser sustituida por otro elemento.|Participa directamente en el metabolismo o la estructura vegetal.'],
['Los 17 esenciales','C, H, O, N, P, K, Ca, Mg, S, Fe, Mn, Zn, Cu, B, Mo, Cl y Ni.'],
['Esencial no significa abundante','Un elemento puede ser indispensable aunque se requiera en cantidades muy pequeñas.'],
['Ciclo de vida','Semilla → planta en crecimiento y desarrollo → flor y reproducción → semilla de una nueva generación.']]],
['Clasificación de los 17 esenciales','Cantidad requerida, no importancia','Los grupos se distinguen por su requerimiento relativo. Todos los nutrientes esenciales son indispensables.',[
['C, H y O','Constituyentes mayoritarios de la materia seca.|Se obtienen principalmente del aire (CO₂) y del agua (H₂O).'],
['Macronutrientes minerales','Se requieren en cantidades relativamente mayores.|Nitrógeno (N), fósforo (P), potasio (K), calcio (Ca), magnesio (Mg) y azufre (S).'],
['Micronutrientes','Se requieren en cantidades relativamente menores.|Hierro (Fe), manganeso (Mn), zinc (Zn), cobre (Cu), boro (B), molibdeno (Mo), cloro (Cl) y níquel (Ni).'],
['No confundir','Macro y micro no indican tamaño ni importancia del elemento.|La concentración del nutriente en los tejidos no es la dosis de fertilizante aplicada al suelo o sustrato.']]],
['N · P · K: macronutrientes primarios','Funciones complementarias','Nitrógeno, fósforo y potasio son macronutrientes esenciales. “Primarios” es una denominación agronómica.',[
['Nitrógeno · N','Participa en aminoácidos, proteínas, ácidos nucleicos (ADN y ARN) y clorofila.|Principales formas de absorción: NO₃⁻ (nitrato) y NH₄⁺ (amonio).'],
['Fósforo · P','Participa en transferencia y almacenamiento de energía (ATP).|Integra ácidos nucleicos y fosfolípidos de membranas.|Principales formas de absorción: H₂PO₄⁻ y HPO₄²⁻.'],
['Potasio · K','Regula el equilibrio osmótico y la apertura y cierre de estomas.|Activa numerosas enzimas.|Se absorbe como K⁺.|No es componente estructural de moléculas orgánicas como proteínas, ácidos nucleicos o fosfolípidos.'],
['Fertilización y etiqueta comercial','Se define según cultivo, etapa, agua disponible y análisis.|Las etiquetas NPK pueden expresar N, P₂O₅ y K₂O. No confundir P₂O₅ y K₂O con P y K elementales.']]],
['Ca · Mg · S: macronutrientes secundarios','Secundarios no significa menos importantes','Son esenciales y cumplen funciones vitales en crecimiento, desarrollo y calidad.',[
['Calcio · Ca²⁺','Forma y estabiliza paredes celulares mediante pectatos de calcio.|Contribuye a la integridad de membranas y señalización celular.|Su transporte depende del flujo de agua por xilema; tiene baja redistribución por floema.'],
['Magnesio · Mg²⁺','Es el átomo central de la clorofila.|Activa enzimas del metabolismo vegetal.|Es móvil: puede redistribuirse desde hojas viejas hacia tejidos en crecimiento.'],
['Azufre · S','Se absorbe principalmente como sulfato, SO₄²⁻.|Integra aminoácidos azufrados como cisteína y metionina, componentes de proteínas.'],
['Equilibrio y diagnóstico','Ca²⁺, Mg²⁺ y otros cationes como K⁺ y Na⁺ se influyen entre sí; un desbalance puede reducir absorción y uso eficiente.|No diagnosticar solo por imagen: integrar observación, análisis del medio y manejo.']]],
['Micronutrientes: Fe · Mn · Zn · Cu','Esenciales en pequeñas cantidades','Participan en fotosíntesis, actividad enzimática, regulación del crecimiento y estructura vegetal.',[
['Hierro · Fe','Participa en transporte electrónico y síntesis de clorofila.|No es el átomo central de la clorofila: ese es el Mg.'],
['Manganeso · Mn','Participa en el fotosistema II y en activación enzimática.'],
['Zinc y cobre','Zn: componente y activador de enzimas; participa en regulación del crecimiento, división y expansión celular y hormonas.|Cu: interviene en reacciones redox mediante plastocianina y en lignificación de la pared celular.'],
['Disponibilidad y exceso','Depende de pH, materia orgánica, aireación y humedad.|La lámina presenta una tendencia general a mayor disponibilidad de estos micronutrientes con pH ácido y menor con pH alcalino.|Puede haber deficiencia o toxicidad. Más no siempre es mejor.']]],
['Micronutrientes: B · Mo · Cl · Ni','Esenciales aunque se requieran en trazas','Cada elemento cumple funciones específicas y tiene una ventana de suficiencia propia.',[
['Boro · B','Contribuye a la integridad de la pared celular y al desarrollo reproductivo: floración, viabilidad del polen y formación de frutos y semillas.|Se absorbe principalmente como ácido bórico, B(OH)₃.'],
['Molibdeno · Mo','Cofactor de la nitrato reductasa, que reduce NO₃⁻ a NO₂⁻ en la asimilación del nitrógeno.|Se absorbe como molibdato, MoO₄²⁻.'],
['Cloro y níquel','Cl: balance iónico y osmótico; participa en el fotosistema II. Se absorbe como Cl⁻.|Ni: cofactor de ureasa, enzima que hidroliza la urea y participa en metabolismo del nitrógeno. Se absorbe como Ni²⁺.'],
['Suficiencia y toxicidad','La ventana entre suficiencia y toxicidad depende del elemento y cultivo.|Prestar especial atención al boro. No se propone una dosis universal.']]],
['Del sustrato a la raíz','Un recorrido regulado','Reservas y sitios de intercambio → solución del sustrato → superficie radicular → absorción selectiva → transporte en planta.',[
['Reservas y solución','Los nutrientes pueden estar retenidos en la matriz del sustrato y sitios de intercambio.|Los iones disueltos en el agua de los poros llegan a la superficie de la raíz y pelos radiculares.|La absorción es regulada y selectiva.'],
['Cómo llegan a la raíz','Flujo masal: el agua que se mueve hacia la raíz arrastra iones disueltos.|Difusión: movimiento desde zonas de mayor concentración hacia zonas de menor concentración.|Raíces más extensas y ramificadas exploran un mayor volumen de sustrato.'],
['Transporte e indicadores','El xilema distribuye principalmente desde raíz hacia hojas; según nutriente, también interviene el floema.|CIC: retiene e intercambia cationes, sin garantizar suministro equilibrado.|pH: regula disponibilidad; CE: refleja sales disueltas, no cantidad de cada nutriente.'],
['Raíces activas','Buena aireación y humedad sin anegamiento sostienen raíces sanas y activas.|Concentración total no equivale a concentración disponible ni a cantidad absorbida.']]],
['Deficiencia, suficiencia y toxicidad','Observar es el comienzo','La nutrición adecuada cubre la demanda; un suministro insuficiente limita funciones y el exceso puede causar toxicidad o antagonismos.',[
['Tres situaciones','Deficiencia: suministro insuficiente que limita funciones.|Suficiencia: cubre la demanda y permite desarrollo normal.|Exceso: puede causar toxicidad o antagonismos con otros nutrientes.'],
['Movilidad como orientación','N, P, K y Mg suelen redistribuirse: las carencias aparecen primero en hojas viejas.|Ca y Fe tienen baja redistribución: los síntomas se observan con frecuencia en tejidos jóvenes, brotes o ápices.'],
['No es un diagnóstico visual','Problemas de raíces, pH, agua o sales pueden imitar deficiencias nutricionales.'],
['Cómo confirmar','Historia del manejo del cultivo.|Análisis del sustrato.|Análisis del agua de riego.|Análisis del tejido vegetal.']]],
['Esenciales, beneficiosos y manejo integrado','Del análisis al ajuste','Esencialidad no equivale a efecto beneficioso. El buen desempeño surge del equilibrio entre nutrientes, agua, aire y raíces.',[
['Esencial o beneficioso','Esencial: sin ese elemento la planta no completa su ciclo de vida.|Un elemento puede generar beneficios sin ser esencial.|Na, Co y Se pueden beneficiar ciertas especies o condiciones, pero no integran la lista general de 17 esenciales de plantas superiores.'],
['Cobalto y particularidades','Co es relevante para microorganismos fijadores de nitrógeno, como rizobios.|La esencialidad puede depender del taxón: evitar generalizar a todas las plantas un requerimiento particular.'],
['Manejo integrado','1. Analizar agua y sustrato.|2. Definir cultivo y etapa.|3. Formular nutrición según cultivo, etapa y análisis.|4. Monitorear pH, CE y crecimiento.|5. Ajustar de manera oportuna y fundamentada.'],
['Sin receta universal','Integrar nutrientes, suministro de agua, aireación y salud y actividad de raíces.|No existe una receta única para todos los cultivos y situaciones.']]]
];
const quizData=[
['¿Qué es un fertilizante?',['Un producto que aporta nutrientes','El elemento N en sí','Una raíz'],0,'Elemento, ion y fertilizante son conceptos distintos.'],
['¿Cuántos elementos esenciales recoge la lista general?',['14','17','20'],1,'Son C, H, O y catorce nutrientes minerales.'],
['Macro y micro se refieren a…',['Importancia','Tamaño del átomo','Cantidad relativa requerida'],2,'Todos son indispensables, aunque se necesiten en cantidades diferentes.'],
['¿Cuáles son formas principales de absorción de N?',['NO₃⁻ y NH₄⁺','P₂O₅ y K₂O','Ca²⁺ y Mg²⁺'],0,'Nitrato y amonio son formas de nitrógeno absorbibles.'],
['¿Qué nutriente participa en ATP?',['Cl','P','Ni'],1,'El fósforo interviene en transferencia y almacenamiento de energía.'],
['¿Qué función cumple K?',['Átomo central de la clorofila','Sustituye a todos los nutrientes','Regulación osmótica y estomas'],2,'K regula el balance osmótico y activa enzimas; se absorbe como K⁺.'],
['¿Cuál es el átomo central de la clorofila?',['Mg','Fe','Ca'],0,'El magnesio ocupa el centro de la clorofila.'],
['El Ca tiene…',['Alta redistribución por floema','Baja redistribución por floema','La misma movilidad que Mg'],1,'Su transporte depende del flujo de agua por xilema.'],
['¿Cuál es la principal forma de absorción de S?',['Sólido elemental siempre','CO₂','SO₄²⁻'],2,'El azufre se absorbe principalmente como sulfato.'],
['¿Qué elemento participa en plastocianina?',['Cu','B','Ni'],0,'El cobre participa en reacciones redox y lignificación.'],
['¿Qué elemento es cofactor de nitrato reductasa?',['Cl','Mo','K'],1,'El molibdeno participa en la reducción de nitrato a nitrito.'],
['¿Qué elemento es cofactor de ureasa?',['Ca','Zn','Ni'],2,'El níquel cumple esta función en el metabolismo del nitrógeno.'],
['El flujo masal lleva iones hacia la raíz…',['Con el movimiento del agua','Solo por diferencias de luz','Por el floema del sustrato'],0,'La difusión, en cambio, responde a gradientes de concentración.'],
['¿Dónde suelen aparecer primero carencias de N, P, K o Mg?',['Siempre en flores','En hojas viejas','Solo en semillas'],1,'Su redistribución orienta el patrón, pero no constituye un diagnóstico.'],
['El manejo integrado comienza con…',['Una dosis universal','Aplicar más fertilizante','Analizar agua y sustrato'],2,'Se define cultivo y etapa, se formula, monitorea y ajusta.']];
