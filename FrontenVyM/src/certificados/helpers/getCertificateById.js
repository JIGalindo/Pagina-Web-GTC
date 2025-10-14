export const getCertificateById = (certificates, id) => {
  return certificates.find((certificate) => certificate.id === id);
}