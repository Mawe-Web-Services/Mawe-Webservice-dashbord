import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Container, InputContainer, Button, SelectContainer } from './styles'
import ReactCountryFlag from 'react-country-flag'
import Select from 'react-select'

// Função para criar o schema de registro com mensagens traduzidas
const createRegisterSchema = (t: (key: string) => string) =>
  z.object({
    firstname: z.string().nonempty(t('register.firstnamePlaceholder')),
    lastname: z.string().nonempty(t('register.lastnamePlaceholder')),
    email: z.string().email(t('login.emailLabel')),
    country: z
      .object({
        value: z.string(),
        label: z.string(),
        code: z.string(),
      })
      .nullable()
      .refine(value => value !== null, {
        message: t('register.selectCountry'),
      }),
    language: z.string().nonempty(t('register.selectLanguage')),
    role: z.string().nonempty(t('register.rolePlaceholder')),
    newsletter: z.boolean(),
  })

type RegisterFormData = z.infer<ReturnType<typeof createRegisterSchema>>

const Register: React.FC = () => {
  const { t } = useTranslation()

  const registerSchema = createRegisterSchema(t)

  const countryOptions = [
    { value: 'AO', label: 'Angola', code: 'AO' },
    { value: 'AR', label: 'Argentina', code: 'AR' },
    { value: 'BO', label: 'Bolivia', code: 'BO' },
    { value: 'BR', label: 'Brazil', code: 'BR' },
    { value: 'BZ', label: 'Belize', code: 'BZ' },
    { value: 'CA', label: 'Canada', code: 'CA' },
    { value: 'CL', label: 'Chile', code: 'CL' },
    { value: 'CN', label: 'China', code: 'CN' },
    { value: 'CO', label: 'Colombia', code: 'CO' },
    { value: 'CR', label: 'Costa Rica', code: 'CR' },
    { value: 'DE', label: 'Germany', code: 'DE' },
    { value: 'EC', label: 'Ecuador', code: 'EC' },
    { value: 'FR', label: 'France', code: 'FR' },
    { value: 'GB', label: 'United Kingdom', code: 'GB' },
    { value: 'GT', label: 'Guatemala', code: 'GT' },
    { value: 'GY', label: 'Guyana', code: 'GY' },
    { value: 'HN', label: 'Honduras', code: 'HN' },
    { value: 'IN', label: 'India', code: 'IN' },
    { value: 'IT', label: 'Italy', code: 'IT' },
    { value: 'MX', label: 'Mexico', code: 'MX' },
    { value: 'NI', label: 'Nicaragua', code: 'NI' },
    { value: 'PA', label: 'Panama', code: 'PA' },
    { value: 'PE', label: 'Peru', code: 'PE' },
    { value: 'PY', label: 'Paraguay', code: 'PY' },
    { value: 'SR', label: 'Suriname', code: 'SR' },
    { value: 'SV', label: 'El Salvador', code: 'SV' },
    { value: 'US', label: 'United States', code: 'US' },
    { value: 'UY', label: 'Uruguay', code: 'UY' },
    { value: 'VE', label: 'Venezuela', code: 'VE' },
  ]

  const languageOptions = [
    { value: 'ruby', label: 'Ruby' },
    { value: 'php', label: 'PHP' },
    { value: 'python', label: 'Python' },
    { value: 'node', label: 'Node.js' },
    { value: 'java', label: 'Java' },
    { value: 'c++', label: 'C++' },
    { value: 'react', label: 'ReactJS' },
    { value: 'javaScript', label: 'JavaScript' },
  ]

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const [submittedData, setSubmittedData] = useState<RegisterFormData | null>(
    null
  )

  const handleRegister = async (data: RegisterFormData) => {
    try {
      const response = await fetch('http://localhost:5764/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      console.log('Registered successfully:', result)
      setSubmittedData(data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleCountryChange = (selectedOption: any) => {
    setValue('country', selectedOption)
  }

  const handleLanguageChange = (selectedOption: any) => {
    setValue('language', selectedOption.value)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(handleRegister)}>
        <h1>{t('register.title')}</h1>

        <InputContainer>
          <input
            type="text"
            placeholder={t('register.firstnamePlaceholder')}
            {...register('firstname')}
          />
          {errors.firstname && <span>{errors.firstname.message}</span>}
        </InputContainer>

        <InputContainer>
          <input
            type="text"
            placeholder={t('register.lastnamePlaceholder')}
            {...register('lastname')}
          />
          {errors.lastname && <span>{errors.lastname.message}</span>}
        </InputContainer>

        <InputContainer>
          <input
            type="email"
            placeholder={t('register.emailPlaceholder')}
            {...register('email')}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </InputContainer>

        <SelectContainer>
          <Select
            onChange={handleCountryChange}
            options={countryOptions}
            placeholder="Choose your country"
            isSearchable={false}
            formatOptionLabel={(option: any) => (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ReactCountryFlag
                  countryCode={option.code}
                  svg
                  style={{
                    width: '1.5em',
                    height: '1.5em',
                    marginRight: '8px',
                  }}
                  aria-label={option.label}
                />
                {option.label}
              </div>
            )}
          />
          {errors.country && <span>{errors.country.message}</span>}
        </SelectContainer>

        <SelectContainer>
          <Select
            onChange={handleLanguageChange}
            options={languageOptions}
            placeholder={t('register.selectLanguage')}
            isSearchable={false}
          />
          {errors.language && <span>{errors.language.message}</span>}
        </SelectContainer>

        <InputContainer>
          <input
            type="text"
            placeholder={t('register.rolePlaceholder')}
            {...register('role')}
          />
          {errors.role && <span>{errors.role.message}</span>}
        </InputContainer>

        <Button type="submit">{t('register.registerButton')}</Button>
      </form>

      {submittedData && (
        <div>
          <h2>{t('register.submittedData')}</h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </Container>
  )
}

export default Register
