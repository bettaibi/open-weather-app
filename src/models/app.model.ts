
export enum UNITS{
    CELSIUS = 'metric', 
    FAHRENHEIT = 'imperial'
};

export type UnitProps = UNITS.CELSIUS | UNITS.FAHRENHEIT;

export interface SearchProps{
    text: string,
    setText: (text: string) => void;
}

export interface UnitsProps{
    unit: UnitProps,
    setUnit: (text: UnitProps) => void;
}

export interface HomeProps extends SearchProps, UnitsProps{

}
