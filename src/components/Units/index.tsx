import React from 'react';
import Stack from '../../styled/Stack/Stack.styled';
import { FabButton } from '../../styled/Button/Button.styled';
import { UnitsProps, UNITS, UnitProps } from '../../models/app.model';
import classNames from 'classnames';

const Units: React.FC<UnitsProps> = ({ unit, setUnit }) => {
    const celsius = unit === UNITS.CELSIUS;
    const fahrenheit = unit === UNITS.FAHRENHEIT;

    function handleChange(input: UnitProps) {
        setUnit(input);
    }

    return (
        <Stack spacing={2} justifyContent="flex-end">
            <FabButton
                elevation={1}
                className={classNames({ 'active': celsius })}
                onClick={() => handleChange(UNITS.CELSIUS)}>
                ℃
            </FabButton>

            <FabButton
                elevation={1}
                className={classNames({ 'active': fahrenheit })}
                onClick={() => handleChange(UNITS.FAHRENHEIT)}>
                ℉
            </FabButton>
        </Stack>
    )
}

export default React.memo(Units);