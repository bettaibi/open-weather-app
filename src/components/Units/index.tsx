import React from 'react';
import Stack from '../../styled/Stack/Stack.styled';
import { FabButton } from '../../styled/Button/Button.styled';
import { UNITS, UnitProps } from '../../models/app.model';
import { useAppDispatch } from '../../store/hooks';
import { updateUnit } from '../../store/unit/unitSlice';
import classNames from 'classnames';

const Units = ({ unit }: {unit: UnitProps}) => {
    const celsius = unit === UNITS.CELSIUS;
    const fahrenheit = unit === UNITS.FAHRENHEIT;
    const dispatch = useAppDispatch();

    function handleChange(input: UnitProps) {
        dispatch(updateUnit(input));
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