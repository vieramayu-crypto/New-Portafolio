/** Composición del correo de solicitud.
 *
 *  El sitio es estático (GitHub Pages): no hay servidor que reciba un POST,
 *  así que la solicitud se entrega abriendo el cliente de correo del visitante
 *  con todo el mensaje ya escrito. Antes de esto los dos formularios sólo
 *  marcaban un estado local y el mensaje se perdía sin que nadie lo recibiera.
 */

export interface InquiryFields {
  name: string;
  email: string;
  propertyName: string;
  /** Opcional y hoy sin usar: el formulario único no pide una fecha aparte, las
   *  fechas se cuentan dentro del proyecto. Se mantiene el campo porque el
   *  cuerpo del correo ya sabe colocarlo si algún día vuelve a hacer falta. */
  availabilityDate?: string;
  phone?: string;
  scope?: string;
  message?: string;
}

export function buildInquirySubject(f: InquiryFields): string {
  const property = f.propertyName.trim() || 'new property';
  return `Availability enquiry — ${property}`;
}

export function buildInquiryBody(f: InquiryFields): string {
  const lines: string[] = [
    `Name: ${f.name.trim()}`,
    `Email: ${f.email.trim()}`,
  ];
  if (f.phone?.trim()) lines.push(`Phone: ${f.phone.trim()}`);
  lines.push(`Property: ${f.propertyName.trim()}`);
  if (f.scope?.trim()) lines.push(`Service: ${f.scope.trim()}`);
  if (f.availabilityDate?.trim()) lines.push(`Dates under consideration: ${f.availabilityDate.trim()}`);
  if (f.message?.trim()) lines.push('', 'Project details:', f.message.trim());
  return lines.join('\n');
}

export function buildInquiryMailto(to: string, f: InquiryFields): string {
  return `mailto:${to}?subject=${encodeURIComponent(buildInquirySubject(f))}&body=${encodeURIComponent(
    buildInquiryBody(f)
  )}`;
}

/** Abre el cliente de correo. Devuelve el texto compuesto para poder mostrarlo
 *  como respaldo copiable si el navegador no tiene cliente configurado. */
export function openInquiryMail(to: string, f: InquiryFields): string {
  const href = buildInquiryMailto(to, f);
  if (typeof window !== 'undefined') {
    window.location.href = href;
  }
  return buildInquiryBody(f);
}
