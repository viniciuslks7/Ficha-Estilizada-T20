export const CLASSES = [
    'Arcanista',
    'Bárbaro',
    'Bardo',
    'Bucaneiro',
    'Caçador',
    'Cavaleiro',
    'Clérigo',
    'Druida',
    'Guerreiro',
    'Inventor',
    'Ladino',
    'Lutador',
    'Nobre',
    'Paladino',
]

export const CLASSES_DETAIL = [
    {
        name: 'Arcanista', pvInicial: 8, incremetPv: 2, pm: 6,
        pericias: 'Misticismo (Int) e Vontade (Sab), mais 1 a sua escolha entre Conhecimento (Int), Iniciativa (Des), Ofício (Int) e Percepção (Sab)',
        proficiencia: ''
    },
    {
        name: 'Bárbaro', pvInicial: 24, incremetPv: 6, pm: 3,
        pericias: 'Fortitude (Con) e Luta (For), mais 4 a sua escolha entre Adestramento (Car), Atletismo (For), Cavalgar (Des), Iniciativa (Des), Intimidação (Car), Ofício (Int), Percepção (Sab), Pontaria (Des), Sobrevivência (Sab) e Vontade (Sab)',
        proficiencia: 'Armas marciais e escudos'
    },
    {
        name: 'Bardo', pvInicial: 12, incremetPv: 3, pm: 4,
        pericias: 'Atuação (Car) e Reflexos (Des) mais 6 a sua escolha entre Acrobacia (Des), Cavalgar (Des), Conhecimento (Int), Diplomacia (Car), Enganação (Car), Furtividade (Des), Iniciativa (Des), Intuição (Sab), Investigação (Int), Jogatina (Car), Ladinagem (Des), Luta (For), Misticismo (Int), Nobreza (Int), Percepção (Sab), Pontaria (Des), Religião (Sab) e Vontade (Sab)',
        proficiencia: 'Armas marciais'
    },
    {
        name: 'Bucaneiro', pvInicial: 16, incremetPv: 4, pm: 3,
        pericias: 'Luta (For) ou Pontaria (Des), Reflexos (Des), mais 4 a sua escolha entre Acrobacia (Des), Atletismo (For), Atuação (Car), Enganação (Car), Fortitude (Con), Furtividade (Des), Iniciativa (Des), Intimidação (Car), Jogatina (Car), Luta (For), Ofício (Int), Percepção (Sab), Pilotagem (Des) e Pontaria (Des)',
        proficiencia: 'Armas marciais'
    },
    {
        name: 'Caçador', pvInicial: 16, incremetPv: 4, pm: 4,
        pericias: ' Luta (For) ou Pontaria (Des), Sobrevivência (Sab), mais 6 a sua escolha entre Adestramento (Car), Atletismo (For), Cavalgar (Des), Cura (Sab), Fortitude (Con), Furtividade (Des), Iniciativa (Des), Investigação (Int), Luta (For), Ofício (Int), Percepção (Sab), Pontaria (Des) e Reflexos (Des)',
        proficiencia: 'Armas marciais e escudos'
    },
    {
        name: 'Cavaleiro', pvInicial: 20, incremetPv: 5, pm: 3,
        pericias: 'Fortitude (Con) e Luta (For), mais 2 a sua escolha entre Adestramento (Car), Atletismo (For), Cavalgar (Des), Diplomacia (Car), Guerra (Int), Iniciativa (Des), Intimidação (Car), Nobreza (Int), Percepção (Sab) e Vontade (Sab)',
        proficiencia: ' Armas marciais, armaduras pesadas e escudos'
    },
    {
        name: 'Clérigo', pvInicial: 16, incremetPv: 4, pm: 5,
        pericias: 'Religião (Sab) e Vontade (Sab), mais 2 a sua escolha entre Conhecimento (Int), Cura (Sab), Diplomacia (Car), Fortitude (Con), Iniciativa (Des), Intuição (Sab), Luta (For), Misticismo (Int), Nobreza (Int), Ofício (Int) e Percepção (Sab)',
        proficiencia: 'Armaduras pesadas e escudos'
    },
    {
        name: 'Druida', pvInicial: 16, incremetPv: 4, pm: 4,
        pericias: 'Sobrevivência (Sab) e Vontade (Sab), mais 4 a sua escolha entre Adestramento (Car) Atletismo (For), Cavalgar (Des), Conhecimento (Int), Cura (Sab), Fortitude (Con), Iniciativa (Des), Intuição (Sab), Luta (For), Misticismo (Int), Ofício (Int), Percepção (Sab) e Religião (Sab)',
        proficiencia: 'Escudos'
    },
    {
        name: 'Guerreiro', pvInicial: 20, incremetPv: 5, pm: 3,
        pericias: 'Luta (For) ou Pontaria (Des), Fortitude (Con), mais 2 a sua escolha entre Adestramento (Car), Atletismo (For), Cavalgar (Des), Guerra (Int), Iniciativa (Des), Intimidação (Car), Luta (For), Ofício (Int), Percepção (Sab), Pontaria (Des) e Reflexos (Des)',
        proficiencia: 'Armas marciais, armaduras pesadas e escudos'
    },
    {
        name: 'Inventor', pvInicial: 12, incremetPv: 3, pm: 4,
        pericias: 'Ofício (Int) e Vontade (Sab), mais 4 a sua escolha entre Conhecimento (Int), Cura (Sab), Diplomacia (Car), Fortitude (Con), Iniciativa (Des), Investigação (Int), Luta (For), Misticismo (Int), Ofício (Int), Pilotagem (Des), Pontaria (Des) e Percepção (Sab)',
        proficiencia: ''
    },
    {
        name: 'Ladino', pvInicial: 12, incremetPv: 3, pm: 4,
        pericias: 'Ladinagem (Des) e Reflexos (Des), mais 8 a sua escolha entre Acrobacia (Des), Atletismo (For), Atuação (Car), Cavalgar (Des), Conhecimento (Int), Diplomacia (Car), Enganação (Car), Furtividade (Des), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Investigação (Int), Jogatina (Car), Luta (For), Ofício (Int), Percepção (Sab), Pilotagem (Des) e Pontaria (Des)',
        proficiencia: ''
    },
    {
        name: 'Lutador', pvInicial: 20, incremetPv: 5, pm: 3,
        pericias: 'Fortitude (Con) e Luta (For), mais 4 a sua escolha entre Acrobacia (Des), Adestramento (Car), Atletismo (For), Enganação (Car), Furtividade (Des), Iniciativa (Des), Intimidação (Car), Ofício (Int), Percepção (Sab), Pontaria (Des) e Reflexos (Des)',
        proficiencia: ''
    },
    {
        name: 'Nobre', pvInicial: 16, incremetPv: 4, pm: 4,
        pericias: 'Diplomacia (Car) ou Intimidação (Car), Vontade (Sab), mais 4 a sua escolha entre Adestramento (Car), Atuação (Car), Cavalgar (Des), Conhecimento (Int), Diplomacia (Car), Enganação (Car), Fortitude (Con), Guerra (Int), Iniciativa (Des), Intimidação (Car), Intuição (Sab), Investigação (Int), Jogatina (Car), Luta (For), Nobreza (Int), Ofício (Int), Percepção (Sab) e Pontaria (Des)',
        proficiencia: 'Armas marciais, armaduras pesadas e escudos'
    },
    {
        name: 'Paladino', pvInicial: 20, incremetPv: 5, pm: 3,
        pericias: ' Luta (For) e Vontade (Sab) mais 2 a sua escolha entre Adestramento (Car), Atletismo (For), Cavalgar (Des), Cura (Sab), Diplomacia (Car), Fortitude (Con), Guerra (Int), Iniciativa (Des), Intuição (Sab), Nobreza (Int), Percepção (Sab) e Religião (Sab)',
        proficiencia: 'Armas marciais, armaduras pesadas e escudos.'
    },
]