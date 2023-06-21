
class PatientService {

  constructor() {}

  async getPatients() {
    const url = '/patients';
    const response = await fetch(url);
    const patients = await response.json();
    return patients;
  }

}