import { StylesConfig } from "react-select";

export const colorStyles: StylesConfig = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: "transparent",
        color: '#386A8B',
        minHeight: "35px",
        borderRadius: "4px",
        padding: '0rem',
        cursor:'pointer',
        border: state.isFocused ? '0.5px solid #169AA6' : '0.5px solid #fff',
        '&:hover': { border: '0.5px solid #fff' },
        boxShadow: state.isFocused ? '0 0 0 1px #169AA6' : 'none'
    }),

    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#169AA6' : '#EDEAEA',
        color: state.isFocused ? 'white' : 'black',
        margin: 0,
        fontSize: "14px"
    }),

    input: (provided, state) => ({
        ...provided,
        width: '5rem',
        padding: '0rem',
        fontSize: '1.125rem',
        outline: 0,
        marginLeft: '-1rem',
        color: '#386A8B',
    }),

    placeholder: (provided) => ({
        ...provided,
        color: '#999999',
        fontSize: '1.125rem',
    }),

    singleValue: (provided) => ({
        ...provided,
        color: '#386A8B',
    }),

    dropdownIndicator: (provided, state) => ({
        ...provided,
        color: state.isFocused ? '#169AA6' : '#386A8B',
        '&:hover': {
            color: '#169AA6',
        }
    }),

    menu: (provided) => ({
        ...provided,
        backgroundColor: '#ffffff',
        borderRadius: '4px',
        marginTop: '4px',
        zIndex: 10,
    }),

    menuList: (provided) => ({
        ...provided,
        padding: 0,
    }),

    indicatorsContainer: (provided) => ({
        ...provided,
        padding: '0 1px',
    }),

    indicatorSeparator: () => ({
        display: 'none',
    }),

    clearIndicator: (provided, state) => ({
        ...provided,
        color: state.isFocused ? '#169AA6' : '#386A8B',
        '&:hover': {
            color: '#169AA6',
        }
    }),

    multiValue: (provided) => ({
        ...provided,
        backgroundColor: '#EDEAEA',
        borderRadius: '4px',
        color: '#386A8B',
    }),

    multiValueLabel: (provided) => ({
        ...provided,
        color: '#386A8B',
    }),

    multiValueRemove: (provided) => ({
        ...provided,
        color: '#386A8B',
        '&:hover': {
            backgroundColor: '#169AA6',
            color: 'white',
        }
    }),
};

