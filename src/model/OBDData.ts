import {OBDField} from './OBDField';

/**
 * OBD Data representations.
 */
export class OBDData {

	/**
	 * The timestamp of the start of each event (before first field read).
	 */
	timestamp?: number;

	/**
	 * The set of bit encoded flags of supported PIDs in decimal form.
	 * @see https://en.wikipedia.org/wiki/OBD-II_PIDs#Service_01_PID_1C
	 */
	supportedPIDs = {
		segment00: 0,
		segment20: 0,
		segment40: 0,
		segment60: 0,
		segment80: 0,
		segmentA0: 0,
	};

	/**
	 * The representation of Calculated Engine Load.
	 */
	calculatedEngineLoad?: OBDField;

	/**
	 * The representation of Commanded Secondary Air Status.
	 */
	commandedSecondaryAirStatus?: OBDField;

	/**
	 * The representation of Distance Traveled with malfunction indicator lamp (MIL) on.
	 */
	distanceTraveledMIL?: OBDField;

	/**
	 * The representation of Engine Coolant Temperature.
	 */
	engineCoolantTemperature?: OBDField;

	/**
	 * The representation of Engine Fuel Rate.
	 */
	engineFuelRate?: OBDField;

	/**
	 * The representation of Ethanol Level.
	 */
	ethanolLevel?: OBDField;

	/**
	 * The representation of Fuel Pressure.
	 */
	fuelPressure?: OBDField;

	/**
	 * The representation of Fuel Tank Level.
	 */
	fuelTankLevel?: OBDField;

	/**
	 * The representation of Fuel System Status.
	 */
	fuelSystemStatus?: OBDField;

	/**
	 * The representation of Intake Air Temperature.
	 */
	intakeAirTemperature?: OBDField;

	/**
	 * The representation of Intake Manifold Absolute Pressure.
	 */
	intakeManifoldAbsolutePressure?: OBDField;

	/**
	 * The representation of Long Term Fuel Trim B1.
	 */
	longTermFuelTrimB1?: OBDField;

	/**
	 * The representation of Long Term Fuel Trim B2.
	 */
	longTermFuelTrimB2?: OBDField;

	/**
	 * The representation of Mass Flow Sensor.
	 */
	massFlowSensor?: OBDField;

	/**
	 * The representation of Oxygen Sensor Voltage 1.
	 */
	oxygenSensorVoltage1?: OBDField;

	/**
	 * The representation of Oxygen Sensor Voltage 2.
	 */
	oxygenSensorVoltage2?: OBDField;

	/**
	 * The representation of Oxygen Sensor Voltage 3.
	 */
	oxygenSensorVoltage3?: OBDField;

	/**
	 * The representation of Oxygen Sensor Voltage 4.
	 */
	oxygenSensorVoltage4?: OBDField;

	/**
	 * The representation of Oxygen Sensor Voltage 5.
	 */
	oxygenSensorVoltage5?: OBDField;

	/**
	 * The representation of Oxygen Sensor Voltage 6.
	 */
	oxygenSensorVoltage6?: OBDField;

	/**
	 * The representation of Oxygen Sensor Voltage 7.
	 */
	oxygenSensorVoltage7?: OBDField;

	/**
	 * The representation of Oxygen Sensor Voltage 8.
	 */
	oxygenSensorVoltage8?: OBDField;

	/**
	 * The representation of Oxygen Sensor Short Term Fuel Trim 1.
	 */
	oxygenSensorShortTermFuelTrim1?: OBDField;

	/**
	 * The representation of Oxygen Sensor Short Term Fuel Trim 2.
	 */
	oxygenSensorShortTermFuelTrim2?: OBDField;

	/**
	 * The representation of Oxygen Sensor Short Term Fuel Trim 3.
	 */
	oxygenSensorShortTermFuelTrim3?: OBDField;

	/**
	 * The representation of Oxygen Sensor Short Term Fuel Trim 4.
	 */
	oxygenSensorShortTermFuelTrim4?: OBDField;

	/**
	 * The representation of Oxygen Sensor Short Term Fuel Trim 5.
	 */
	oxygenSensorShortTermFuelTrim5?: OBDField;

	/**
	 * The representation of Oxygen Sensor Short Term Fuel Trim 6.
	 */
	oxygenSensorShortTermFuelTrim6?: OBDField;

	/**
	 * The representation of Oxygen Sensor Short Term Fuel Trim 7.
	 */
	oxygenSensorShortTermFuelTrim7?: OBDField;

	/**
	 * The representation of Oxygen Sensor Short Term Fuel Trim 8.
	 */
	oxygenSensorShortTermFuelTrim8?: OBDField;

	/**
	 * The representation of RPM.
	 */
	rpm?: OBDField;

	/**
	 * The representation of Short Term Fuel Trim B1.
	 */
	shortTermFuelTrimB1?: OBDField;

	/**
	 * The representation of Short Term Fuel Trim B2.
	 */
	shortTermFuelTrimB2?: OBDField;

	/**
	 * The representation of Timing Advance.
	 */
	timingAdvance?: OBDField;

	/**
	 * The representation of Throttle Position.
	 */
	throttlePosition?: OBDField;

	/**
	 * The representation of Vehicle Identifier.
	 */
	vehicleIdentifier?: OBDField;

	/**
	 * The representation of Vehicle Speed.
	 */
	vehicleSpeed?: OBDField;
}
