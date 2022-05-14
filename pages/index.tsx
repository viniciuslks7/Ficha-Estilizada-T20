import Head from 'next/head'
import { FC } from 'react'
import { CLASSES } from '../components/consts/classes'
import { DIVINDADES } from '../components/consts/divindades'
import { LEVELS } from '../components/consts/levels'
import { ORIGENS } from '../components/consts/origens'
import { PERICIAS } from '../components/consts/perricias'
import { RACAS } from '../components/consts/racas'
import DivFlex from '../components/DivFlex'
import useGlobal, { GlabalProvider } from '../components/globalContext'
import Input from '../components/Input'
import Label from '../components/Label'
import Select from '../components/Select'
import styles from '../styles/Home.module.css'
import { getClassDetail } from '../utils/getClassDetail'
import { getDivindadeDetail } from '../utils/getDivindadeDetail'
import { getRacaDetail } from '../utils/getRacaDetail'


const Main: FC = () => {

    const { ficha, salvarFicha, carregarFicha } = useGlobal();

    const PERICIA_TREINO = Number(ficha.nivel) < 7 ? '+2' :
        Number(ficha.nivel) < 15 ? '+4' :
            '+6';

    const classDetail = getClassDetail(ficha.classe);
    const racaDetail = getRacaDetail(ficha.raca)
    const divindadeDetail = getDivindadeDetail(ficha.divindade)

    return <DivFlex flexDirection='column' style={{ width: '100%', minHeight: '100%', maxWidth: 900 }} gap={50} flexWrap='nowrap'>
        <DivFlex style={{ marginTop: 20 }}>
            <button onClick={salvarFicha}>Salvar ficha em arquivo</button>
            <Label caption='Carregar arquivo de ficha'>
                <input type='file' onChange={carregarFicha} />
            </Label>
        </DivFlex>
        <DivFlex flexDirection='column'>
            <DivFlex>
                <Input placeholder='Jogador' name='jogador' />
                <Input placeholder='Personagem' name='personagem' />
            </DivFlex>
            <DivFlex>
                <Select placeholder='Raça' name='raca' items={RACAS} defaultValue='Humano' />
                <Select placeholder='Classe' name='classe' items={CLASSES} />
                <Select placeholder='Nível' name='nivel' items={LEVELS.map(l => ({ value: l, text: `Nível ${l}` }))} defaultValue={1} />
            </DivFlex>
            <DivFlex>
                <Select placeholder='Origem' name='origem' items={ORIGENS} />
                <Select placeholder='Divindade' name='divindade' items={DIVINDADES} />
            </DivFlex>
        </DivFlex>
        <DivFlex>
            <Label caption='Ajuste de atributos'>
                {racaDetail?.attrAjust}
            </Label>
        </DivFlex>
        <DivFlex flexDirection='column' flexWrap='nowrap'>
            <DivFlex flexDirection='column'>
                <Label caption='FOR / AJUSTES / BONUS' >
                    <Input width={80} flex={0} name='for' placeholder='FOR' type='number' />
                    <Input width={80} flex={0} name='for_ajust' placeholder='ajust' type='number' />
                    <Input width={80} flex={0} name='for_bonus' placeholder='bonus' type='number' />
                </Label>
                <Label caption='DES / AJUSTES / BONUS'>
                    <Input width={80} flex={0} name='des' placeholder='DES' type='number' />
                    <Input width={80} flex={0} name='des_ajust' placeholder='ajust' type='number' />
                    <Input width={80} flex={0} name='des_bonus' placeholder='bonus' type='number' />
                </Label>
                <Label caption='CON / AJUSTES / BONUS'>
                    <Input width={80} flex={0} name='con' placeholder='CON' type='number' />
                    <Input width={80} flex={0} name='con_ajust' placeholder='ajust' type='number' />
                    <Input width={80} flex={0} name='con_bonus' placeholder='bonus' type='number' />
                </Label>
                <Label caption='INT / AJUSTES / BONUS'>
                    <Input width={80} flex={0} name='int' placeholder='INT' type='number' />
                    <Input width={80} flex={0} name='int_ajust' placeholder='ajust' type='number' />
                    <Input width={80} flex={0} name='int_bonus' placeholder='bonus' type='number' />
                </Label>
                <Label caption='SAB / AJUSTES / BONUS'>
                    <Input width={80} flex={0} name='sab' placeholder='SAB' type='number' />
                    <Input width={80} flex={0} name='sab_ajust' placeholder='ajust' type='number' />
                    <Input width={80} flex={0} name='sab_bonus' placeholder='bonus' type='number' />
                </Label>
                <Label caption='CAR / AJUSTES / BONUS'>
                    <Input width={80} flex={0} name='car' placeholder='CAR' type='number' />
                    <Input width={80} flex={0} name='car_ajust' placeholder='ajust' type='number' />
                    <Input width={80} flex={0} name='car_bonus' placeholder='bonus' type='number' />
                </Label>
            </DivFlex>
        </DivFlex>
        <DivFlex>
            <Label flex={0} caption='PV / PM'>
                <Input
                    type='number'
                    width={80} flex={0}
                    value={classDetail?.pvInicial + Number(ficha.con_bonus || 0) + (classDetail?.incremetPv + Number(ficha.con_bonus || 0)) * Number(ficha.nivel || 0)}
                />
            </Label>
            <Label flex={0} caption='PM'>
                <Input
                    type='number'
                    width={80} flex={0}
                    value={classDetail?.pm * Number(ficha.nivel || 0)}
                />
            </Label>
        </DivFlex>
        <DivFlex>
            <Label caption='CA / Destreza / armadura / escudo / outros'>
                <Input
                    width={80} flex={0}
                    type='number' placeholder='CA Total' title='CA Total'
                    value={
                        10 + Number(ficha.des_bonus) + Number(ficha['ca.bodus_armadura']) + Number(ficha['ca.bodus_esculdo']) + Number(ficha['ca.outros_bonus'])
                    }
                />
                <Input width={80} flex={0} type='number' placeholder='Destreza' title='Bônus de destreza' value={Number(ficha.des_bonus)} />
                <Input width={80} flex={0} type='number' placeholder='Bônus armadura' title='Bônus armadura' name='ca.bodus_armadura' />
                <Input width={80} flex={0} type='number' placeholder='Bônus de esculdo' title='Bônus de esculdo' name='ca.bodus_esculdo' />
                <Input width={80} flex={0} type='number' placeholder='Outros bônus' title='Outros bônus' name='ca.outros_bonus' />
            </Label>
        </DivFlex>
        <DivFlex>
            <Label caption='HABILIDADES DE RAÇA'>
                {racaDetail?.habilidades || 'Nenhuma'}
            </Label>
            <Label caption='Proficiências'>
                {classDetail?.proficiencia || 'Nenhuma'}
            </Label>
        </DivFlex>
        {
            !divindadeDetail?.name ? null :
                <DivFlex>
                    <Label caption='Energia'>
                        {divindadeDetail?.energia}
                    </Label>
                    <Label caption='Arma'>
                        {divindadeDetail?.arma}
                    </Label>
                    <Label caption='Poderes concedidos'>
                        {divindadeDetail?.poderes}
                    </Label>
                </DivFlex>
        }
        <DivFlex flexDirection='column'>
            <div>
                <b>Perícias:</b> {classDetail?.pericias || ''}
            </div>
            <table className='list'>
                <thead>
                    <tr>
                        <th>Perícia</th>
                        <th>Total</th>
                        <th>Nível</th>
                        <th>Attr</th>
                        <th>
                            Treino ( +0 / {PERICIA_TREINO} )
                        </th>
                        <th>Outros</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        PERICIAS.map(per => {

                            const { attr, name, treined, armadura } = per;
                            const valueAttr = Number(ficha[`${per.attr}_bonus`] || 0);
                            const valueLevel = Math.trunc(Number(ficha.nivel) / 2);
                            const valueTreino = Number(ficha[`pericia.${name}_treino`] || 0)
                            const valueOutros = Number(ficha[`pericia.${name}_outros`] || 0)
                            const total = (treined && !valueTreino) ? '' :
                                valueLevel + valueAttr + valueTreino + valueOutros;

                            const errorTreinedStyle = (valueTreino !== 0 && valueTreino !== Number(PERICIA_TREINO)) ?
                                { backgroundColor: 'red', color: 'white' } : {};

                            return <tr className={[treined ? `treined` : ""].join(' ')}>
                                <td>{name} ({attr}{armadura ? ' / armadura' : ''})</td>
                                <td><Input type='number' style={{ width: 100 }} value={total} /></td>
                                <td><Input type='number' style={{ width: 100 }} value={valueLevel} /></td>
                                <td><Input type='number' style={{ width: 100 }} value={valueAttr} /></td>
                                <td><Input name={`pericia.${name}_treino`} type='number' style={{ width: 100, ...errorTreinedStyle }} /></td>
                                <td><Input name={`pericia.${name}_outros`} type='number' style={{ width: 100 }} /></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </DivFlex>
    </DivFlex>

}

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Ficha Tormenta D20</title>
                <meta name="description" content="Montagem de ficha de tormenta D20" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <GlabalProvider>
                <Main />
            </GlabalProvider>
        </div>
    )
}
