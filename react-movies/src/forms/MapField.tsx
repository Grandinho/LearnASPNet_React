import { useFormikContext } from 'formik';
import coordianteDTO from '../utils/coordinate.model'
import Map from '../utils/Map'

export default function MapField(props: mapFieldProps) {

    const {values} = useFormikContext<any>();


    function handleMapClick(coordinates: coordianteDTO) {
        values[props.latField] = coordinates.lat;
        values[props.lngField] = coordinates.lgn;
    }

    return(
        <Map 
            coordinates={props.coordinates}
            handleMapClick={handleMapClick}
        />
    )
}

interface mapFieldProps {
    coordinates: coordianteDTO[];
    latField: string;
    lngField: string;
}

MapField.defaultProps = {
    coordinates: []
}